/**
 * Created by Administrator on 2015/5/29 0029.
 */
/**
 * Created by Administrator on 2015/5/29 0029.
 */

//思路：1、找出table，2、对每个table元素创建odd变量且初始化为false，3、遍历表格所有数据行，
//若odd为true，设置样式，且把odd改为false；若odd为false，不设置任何样式，但要把odd修改为false


function lightRows(){
    var rows = document.getElementsByTagName('tr');
    //console.log(rows);
    for(var i=0; i<rows.length; i++){
        rows[i].onmouseover=function(){
            this.style.fontWeight = 'bold';
            //alert("mission complete!")
        };
        rows[i].onmouseout=function(){
            this.style.fontWeight = 'normal';
        };
    }
}

function stripeTables(){
    var oTab = document.getElementsByTagName('table');
    var odd, rows;

    for(var i=0; i<oTab.length; i++){
        odd = false;
        rows = oTab[i].getElementsByTagName('tr');
        for(var j=0; j<rows.length; j++){
            if(odd == true){
                rows[j].style.backgroundColor = '#ffc';
                //alert("ok");
                odd = false;
            }
            else{
                odd = true;
            }
        }
    }
}


function addonloadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

addonloadEvent(stripeTables);
addonloadEvent(lightRows);
//addonloadEvent(displayAbbr);







