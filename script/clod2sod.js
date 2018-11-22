/**
* Игровое поле
*
* Класс описывает игровое поле и главное меню, методы инициализации уровней
* и игрового процесса
*
* @author       Gorbatyuk Eduard
* @version      1.0.9
* @copyright    GNU Public License
*/
function MainField() {
    /**
    * Элемент html представляющий игровое поле
    *
    * Используется для изменения внешнего вида и положения элемента на странице
    *
    * @var      object  element
    */
    this.element = $("#play_field");
    this.element.width(810);
    this.element.height(541);
    /**
    * Положение игрового поля на странице
    *
    * Используется для определения положения других элементов
    *
    * @var      object  offset
    */
    this.offset = this.element.offset();
    /**
    * Ширина игрового поля
    *
    * Используется для определения положения других элементов
    *
    * @var      int     width
    */
    this.width = this.element.width();
     /**
    * Высота игрового поля
    *
    * Используется для определения положения других элементов
    *
    * @var      int     height
    */
    this.height = this.element.height();
    /**
    * Инициализация поля для текущего уровня { }
    *
    * Прорисовывает на игровом поле ячейки в том количестве и положении, которые заданы
    * в текущем уровне. Вызывается каждый раз при нажатии на игровое поле
    * 
    * @param    null    Не требует параметров
    * @return   void    Не возвращает значений
    */   
    this.initGame = function() {
        // Количество комков
        var clodd = cnt_sod - cnt_clod;
        this.element.prepend("<div class='info'><div id='sods'>Кол-во комков: " + clodd + "/" + cnt_sod 
        + "</div><div id='moves'>Кол-во кликов: "+ cnt_click 
        + "</div><div id='reset' class='info'>Заново</div><div id='exit' class='info'>Выход</div></div>");
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (lv[i][j] == 1) {
                    this.element.prepend("<div id='sod_" + i + "_" + j + "'class='game' style='left:" + (j * 50) + "px; top:"
                    +(i * 50)+"; width:48px; height: 48px; background-color: brown'></div>")
                }
                if (lv[i][j] == -1) {
                    this.element.prepend("<div id='sod_" + i + "_" + j + "'class='game' style='left:"+(j * 50)+"px; top:"
                    +(i * 50)+"; width:48px; height: 48px; background-color: none'></div>")
                }
            }
        }
    }
    /**
    * Подсчет коричневых ячеек { }
    *
    * Подсчитывает количество ячеек коричневого цвета
    * 
    * @param    void    Не требует параметров
    * @return   void    Не возвращает значений
    */ 
    this.countSod = function() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (lv[i][j] == 1) {
                    cnt_sod++;
                }
            }
        }
    }
    /**
    * Подсчет зеленых ячеек { }
    *
    * Подсчитывает количество ячеек зеленого цвета
    * 
    * @param    void    Не требует параметров
    * @return   void    Не возвращает значений
    */ 
    this.countClod = function() {
        cnt_clod = 0;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (lv[i][j] == -1) {
                    cnt_clod++;
                }
            }
        }
    }
    /**
    * Инициализация уровней { }
    *
    * Выводит количество уровней для выбора игроком, ширина и высота заданы константами widthBlock и heightBlock соответственно
    * и указывает на блоке с уровнем количество кликов, если он пройден, и коричневую границу вокруг него, если он не пройден
    * 
    * @param    void    Не требует параметров
    * @return   void    Не возвращает значений
    */ 
    this.initLevels = function() {
        this.element.prepend("<div class='rules'><h3>Выбор уровня</h3> <p>Выберите уровень для игры</p> <br> <p>Коричневые граница и квадрат: уровень закрыт</p><br><p>Зеленая граница и коричневый квадрат: уровень открыт, но не пройден</p><br><p>Зеленая граница и нет квадрата: уровень открыт и пройден</p></div>");
        var cnt = 1;
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 6; j++) {
                if (MOVES_OPEN.open[cnt - 1] == 1) {
                    this.element.prepend("<div id='" + cnt + "' class='levels' style='left:" + (j * widthBlock + 59) + "px; top:"
                    + (i * heightBlock + 270) + "; width:" + (widthBlock - 10) + "px; height: " + (heightBlock - 10) + "px;  border-color: green'><div id='num_lev'>"
                    + cnt + "</div><div id='frame'></div></div>");
                    if (MOVES_OPEN.moves[cnt-1] != 0) {
                        this.element = $(".levels");
                        $("#d_moves").remove();
                        this.element.prepend("<div id='d_moves'> Кликов: " + MOVES_OPEN.moves[cnt - 1] + "</div>");
                        $("#frame").remove();
                        this.element = $("#play_field");
                    }
                } else {
                    this.element.prepend("<div id='" + cnt + "' class='levels' style='left:" + (j * widthBlock + 59) + "px; top:"
                    + (i * heightBlock + 270) + "; width:" + (widthBlock - 10) + "px; height: " + (heightBlock - 10) + "px;  border-color: brown'><div id='num_lev'>"
                    + cnt + "</div><div id='frame'></div></div>");
                }
                cnt++;
            }
        }
        this.element.prepend("<div class='score'><p>Количество Очков: " + score + "</p></div>");
    }
    /**
    * Обновоение уровней { }
    *
    * Очищает главное меню от элементов игрового поля и снова заполняет его блоками с уровнями,
    * подсказками и количеством очков за всю игру
    *  
    * @param    null    Не требует параметров
    * @return   void    Не возвращает значений
    */ 
    this.refreshLevels = function() {
        $('.levels').remove();
        $('.game').remove();
        $('.info').remove();
        this.initLevels();
        var in_levels = document.getElementsByClassName("levels");
        for (var i = 0; i < in_levels.length; i++) {
            in_levels[i].addEventListener("click", click_levels);
        }
        /**
        * Инициализация уровня, который выбрал игрок
        */
        function click_levels() {
            cnt_sod = cnt_clod = cnt_click = 0;
            lv = null;
            switch(this.id) {
                case '1': {
                    lv = JSON.parse(JSON.stringify(LEVEL.l_1));
                    tek_lv = 0;
                    pa.countSod();
                    pa.refreshGame();
                    break;
                }
                case '2': {
                    if (MOVES_OPEN.open[1] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_2)); 
                        tek_lv = 1; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '3': {
                    if (MOVES_OPEN.open[2] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_3)); 
                        tek_lv = 2; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '4': {
                    if (MOVES_OPEN.open[3] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_4)); 
                        tek_lv = 3; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '5': {
                    if (MOVES_OPEN.open[4] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_5)); 
                        tek_lv = 4; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '6': { 
                    if (MOVES_OPEN.open[5] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_6)); 
                        tek_lv = 5; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '7': {
                    if (MOVES_OPEN.open[6] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_7)); 
                        tek_lv = 6; pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '8': {
                    if (MOVES_OPEN.open[7] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_8)); 
                        tek_lv = 7; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '9': {
                    if (MOVES_OPEN.open[8] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_9)); 
                        tek_lv = 8; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break; 
                    } else break;
                }
                case '10': {
                    if (MOVES_OPEN.open[9] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_10)); 
                        tek_lv = 9; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break; 
                    } else break;
                }
                case '11': {
                    if (MOVES_OPEN.open[10] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_11)); 
                        tek_lv = 10; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
                case '12': { 
                    if (MOVES_OPEN.open[11] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_12)); 
                        tek_lv = 11; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else break;
                }
            }
        }
    } 
    /**
    * Обновление игрового поля { }
    *
    * Очищает игровое поле от элементов главного меню и инициализирует выбранный уровень
    *  
    * @param    null    Не требует параметров
    * @return   void    Не возвращает значений
    */ 
    this.refreshGame = function() {
        $('.levels').remove();
        $('.rules').remove();
        $('.score').remove();
        $('.game').remove();
        $('.info').remove();
        this.initGame();

        var in_game = document.getElementsByClassName("game");
        for (var i = 0; i < in_game.length; i++) {
            in_game[i].addEventListener("click", click_field);
        }

        var in_info = document.getElementsByClassName("info");
        for (var i = 0; i < in_info.length; i++) {
            in_info[i].addEventListener("click", click_info);
        }
        /**
        * Обновление и выход из текущего уровня
        */
        function click_info() {
            if (this.id == "reset") {
                for (var i = 0; i < 8; i++) {
                    for (var j = 0; j < 8; j++) {
                        if (lv[i][j] == -1) {
                            lv[i][j] = 1;
                        }
                    }
                }
                cnt_click = 0;
                pa.count_clod();
                pa.refreshGame();
            } else         
                if (this.id == "exit") {
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            if (lv[i][j] == -1) {
                                lv[i][j] = 1;
                            }
                        }
                    }
                    cnt_click = 0;
                    pa.refreshLevels();
                }
        }
        /**
        * Действия при нажатии на ячеку поля
        */
        function click_field() {
            for(var i = 0; i < 8; i++){
                for(var j = 0; j < 8; j++){
                    if(this.id == "sod_" + i + "_" + j){
                      if (lv[i][j] == -1) lv[i][j] = 1;
                      else lv[i][j] = -1;
                      if(lv[i - 1][j] == -1) lv[i - 1][j] = 1;
                      else if (lv[i - 1][j] != 0) lv[i - 1][j] = -1;
                      if(lv[i + 1][j] == -1) lv[i + 1][j] = 1;
                      else if (lv[i + 1][j] != 0) lv[i + 1][j] = -1;
                      if(lv[i][j - 1] == -1) lv[i][j - 1] = 1;
                      else if (lv[i][j - 1] != 0) lv[i][j - 1] = -1;
                      if(lv[i][j + 1] == -1) lv[i][j + 1] = 1;
                      else if (lv[i][j + 1] != 0) lv[i][j + 1] = -1;
                      cnt_click++;
                      pa.count_clod();
                      pa.refresh_game();
                      if(cnt_sod == cnt_clod){
                          MOVES_OPEN.open[tek_lv + 1] = 1;
                          if(MOVES_OPEN.moves[tek_lv] == 0 || cnt_click < MOVES_OPEN.moves[tek_lv]){
                            MOVES_OPEN.moves[tek_lv] = cnt_click;
                            MOVES_OPEN.score[tek_lv] = 100 - cnt_click;
                          }     
                          alert("Уровень пройден!"); 
                          score = 0;
                          for(var k = 0; k < cnt_lvl; k++){
                              score += MOVES_OPEN.score[k];
                          }              
                          pa.refresh_levels();
                      }
                    }
                }
            }
        }
    } 
}
/**
* Ширина блока уровня
*
* Используется для прорисовки блока уровня
*
* @var      int     widthBlock
*/
const widthBlock=116;
/**
* Высота блока уровня
*
* Используется для прорисовки блока уровня
*
* @var      int     heightBlock
*/
const heightBlock=100;
/**
* Количество уровней
*
* Используется для инициализации уровней
*
* @var      int     cnt_lvl
*/
const cnt_lvl = 12;
/**
* Объект класса MainField
*
* Используется для инициализации и хранения объекта класса MainField
*
* @var      MainField    pa
*/
var pa;
/**
* Элемент структуры LEVELS
*
* Используется для инициализации уровней
*
* @var      struct     lv
*/
var lv;
/**
* Номер текущего уровня
*
* Используется в игровом процессе
*
* @var      int     tek_lv
*/
var tek_lv = 0;
/**
* Количество зеленых ячеек поля
*
* Используется в игровом процессе для подсчета зеленых ячеек поля
*
* @var      int     cnt_sod
*/
var cnt_sod = 0;
/**
* Количество коричневых ячеек поля
*
* Используется в игровом процессе для подсчета коричневых ячеек поля
*
* @var      int     cnt_clod
*/
var cnt_clod = 0;
/**
* Количество кликов по ячеекам
*
* Используется в игровом процессе для подсчета кликов по ячекам
*
* @var      int     cnt_clod
*/
var cnt_click = 0;
/**
* Количество очков за всю игру
*
* Используется для подсчета суммарного количества очков за игру
*
* @var      int     cnt_clod
*/
var score = 0;
/**
* Исходные уровни
*
* Используется для инициализации уровней на игровом поле
*
* @var      struct  LEVEL
*/
var LEVEL = {
    l_1: [[0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0]
        ],
    l_2: [[0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,1,1,1,1,0,0],
          [0,0,1,1,1,1,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0] 
        ],
    l_3: [[0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,1,1,1,1,0,0],
          [0,0,1,1,1,1,0,0],
          [0,0,1,1,1,1,0,0],
          [0,0,1,1,1,1,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0] 
        ],
    l_4: [[0,0,0,0,0,0,0,0],
          [0,0,1,0,0,1,0,0],
          [0,1,1,0,0,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,0,0,1,1,0],
          [0,0,1,0,0,1,0,0],
          [0,0,0,0,0,0,0,0] 
        ],
    l_5: [[0,0,0,0,0,0,0,0],
          [0,1,1,1,1,0,0,0],
          [0,1,1,1,1,0,0,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,0,0,1,1,1,1,0],
          [0,0,0,1,1,1,1,0],
          [0,0,0,0,0,0,0,0]
        ],
    l_6: [[0,0,0,0,0,0,0,0],
          [0,1,1,1,1,1,0,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,0,0,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0]
        ],
    l_7: [[0,0,0,0,0,0,0,0],
          [0,1,1,0,0,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,0,1,0,0,1,0,0],
          [0,0,1,0,0,1,0,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,0,0,1,1,0],
          [0,0,0,0,0,0,0,0]
        ],
    l_8: [[0,0,0,0,0,0,0,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,1,1,1,1,0,0],
          [0,0,1,1,1,1,0,0]
        ],
    l_9: [[0,0,0,1,1,0,0,0],
          [0,0,0,1,1,0,0,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,0,0,1,1,0,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,0,1,1,0,0,0],
          [0,0,0,1,1,0,0,0]
        ],
    l_10:[[0,0,0,0,0,0,0,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,0],
          [0,0,0,0,0,0,0,0]
        ],
    l_11:[[0,0,0,1,1,0,0,0],
          [0,0,1,1,1,1,0,0],
          [0,1,1,1,1,1,1,0],
          [1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1],
          [0,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,0,0],
          [0,0,0,1,1,0,0,0]
          ],
    l_12:[[0,1,1,1,1,1,1,0],
          [1,1,1,1,1,1,1,1],
          [1,1,0,0,0,0,1,1],
          [1,1,0,0,0,0,1,1],
          [1,1,0,0,0,0,1,1],
          [1,1,0,0,0,0,1,1],
          [1,1,1,1,1,1,1,1],
          [0,1,1,1,1,1,1,0]
          ]
}
/**
* Исходные состояния уровней
*
* Используется для инициализации уровней в главном меню при выборе уровней
*
* @var      struct  MOVES_OPEN
*/
var MOVES_OPEN = {
    moves: [0,0,0,0,0,0,0,0,0,0,0,0],
    open: [1,0,0,0,0,0,0,0,0,0,0,0],
    score: [0,0,0,0,0,0,0,0,0,0,0,0]
}
/**
* Инициализация главного меню и уровней на нем,
* а также подсказок и количества очков за игру
*/
$(document).ready(function() {
    pa = new MainField();
    pa.refreshLevels();
})