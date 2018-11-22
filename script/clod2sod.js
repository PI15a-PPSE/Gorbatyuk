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

var MOVES_OPEN = {
    moves: [0,0,0,0,0,0,0,0,0,0,0,0],
    open: [1,0,0,0,0,0,0,0,0,0,0,0],
    score: [0,0,0,0,0,0,0,0,0,0,0,0]
}

function MainField() {
    this.element = $("#play_field");
    this.element.width(810);
    this.element.height(541);
    this.offset = this.element.offset();
    this.width = this.element.width();
    this.height = this.element.height();
  
    this.initGame = function() {
        var clodd = cnt_sod - cnt_clod;
        this.element.prepend("<div class='info'><div id='sods'>Кол-во комков: " + clodd + "/" + cnt_sod + "</div><div id='moves'>Кол-во кликов: "+ cnt_click + "</div><div id='reset' class='info'>Заново</div><div id='exit' class='info'>Выход</div></div>");
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

    this.countSod = function() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (lv[i][j] == 1) {
                    cnt_sod++;
                }
            }
        }
    }

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

    this.refreshLevels = function() {
        $('.levels').remove();
        $('.game').remove();
        $('.info').remove();
        this.initLevels();
        var in_levels = document.getElementsByClassName("levels");
        for (var i = 0; i < in_levels.length; i++) {
            in_levels[i].addEventListener("click", click_levels);
        }
        
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
                    } else 
                        break;
                }
                case '3': {
                    if (MOVES_OPEN.open[2] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_3)); 
                        tek_lv = 2; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
                case '4': {
                    if (MOVES_OPEN.open[3] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_4)); 
                        tek_lv = 3; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
                case '5': {
                    if (MOVES_OPEN.open[4] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_5)); 
                        tek_lv = 4; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
                case '6': { 
                    if (MOVES_OPEN.open[5] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_6)); 
                        tek_lv = 5; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
                case '7': {
                    if (MOVES_OPEN.open[6] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_7)); 
                        tek_lv = 6; pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
                case '8': {
                    if (MOVES_OPEN.open[7] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_8)); 
                        tek_lv = 7; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
                case '9': {
                    if (MOVES_OPEN.open[8] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_9)); 
                        tek_lv = 8; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break; 
                    } else 
                        break;
                }
                case '10': {
                    if (MOVES_OPEN.open[9] == 1) {
                        lv = JSON.parse(JSON.stringify(LEVEL.l_10)); 
                        tek_lv = 9; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break; 
                    } else 
                        break;
                }
                case '11': {
                    if (MOVES_OPEN.open[10] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_11)); 
                        tek_lv = 10; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
                case '12': { 
                    if (MOVES_OPEN.open[11] == 1) { 
                        lv = JSON.parse(JSON.stringify(LEVEL.l_12)); 
                        tek_lv = 11; 
                        pa.countSod(); 
                        pa.refreshGame(); 
                        break;
                    } else 
                        break;
                }
            }
        }
    } 

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

const widthBlock=116;
const heightBlock=100;
const cnt_lvl = 12;
var pa;
var lv;
var tek_lv = 0;
var cnt_sod = 0;
var cnt_clod = 0;
var cnt_click = 0;
var score = 0;
<<<<<<< HEAD
var second = 0;
=======
var sec = 0;
>>>>>>> lab4

$(document).ready(function() {
    pa = new MainField();
    pa.refreshLevels();
})