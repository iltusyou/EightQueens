        $(document).ready(function () {
            // 做出表格
            for (var i = 0; i < 8; i++) {
                $('tbody').append("<tr></tr>");
                for (var j = 0; j < 8; j++) {
                    $('tr').eq(i).append("<td></td>");
                }
            }
                
            $('td').click(function (event) {
                var row = $(this).parent().index(); //tr's index
                var col = $(this).index(); //td's index
               
                                               
                if ($(this).attr('class') != 'k') {
                    //橫
                    for (var i = 0; i < 8; i++) {
                        $('tr').eq(row).children().eq(i).addClass('k'); 
                    }
                    //直
                    for (var i = 0; i < 8; i++) {
                        $('tr').eq(i).children().eq(col).addClass('k');                     
                    }
                    //右下斜
                    var count = Math.min(7 - row, 7 - col);//
                    for (var i = 1; i <= count; i++) {
                        $('tr').eq(row + i).children().eq(col + i).addClass('k');  
                    }
                    //右上斜
                    var count = Math.min(row, 7 - col);
                    for (var i = 1; i <= count; i++) {
                        $('tr').eq(row - i).children().eq(col + i).addClass('k');  
                    }
                    //左上斜
                    var count = Math.min(row, col);
                    for (var i = 1; i <= count; i++) {
                        $('tr').eq(row - i).children().eq(col - i).addClass('k');  
                    }
                    //左下斜
                    var count = Math.min(7 - row, col);
                    for (var i = 1; i <= count; i++) {
                        $('tr').eq(row + i).children().eq(col - i).addClass('k');  
                    }
                    $('tr').eq(row).children().eq(col).addClass('w');
                }
            });
            //重新開始
            $('span').click(function (event) {
                for (var i = 0; i < 8; i++) {
                    for (var j = 0; j < 8; j++) {
                        $('tr').eq(i).children().eq(j).removeClass();
                    }
                }
            });            
        }); 
