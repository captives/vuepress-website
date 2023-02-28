# 日月周时间段处理

<ul id="monitor">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
<div class="date"></div>
<button id="last-week">上一周</button><button id="next-week">下一周</button>

<script>
  export default {
    name:"DateByWeek",
    mounted(){
          var cells = document.getElementById('monitor').getElementsByTagName('li');
          var clen = cells.length;

          var currentFirstDate;
          var formatDate = function (date) {
              var year = date.getFullYear() + '年';
              var month = (date.getMonth() + 1) + '月';
              var day = date.getDate() + '日';
              var week = '(' + ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()] + ')';

              return year + month + day + ' ' + week;
          };

          var addDate = function (date, n) {
              var _date = new Date(date);
              _date.setDate(date.getDate() + n);
              return _date;
          };

          var setDate = function (date) {
              var week = date.getDay() - 1;
              date = addDate(date, week * -1);
              currentFirstDate = new Date(date);

              for (var i = 0; i < clen; i++) {
                  cells[i].innerHTML = formatDate(i == 0 ? date : addDate(date, 1 * i));
              }

              var weekStart = new Date(new Date(date).setHours(0, 0, 0, 0));
              var weekEnd = new Date(new Date(addDate(date, 1 * 6)).setHours(23, 59, 59, 999));
              console.log('本周', weekStart, weekEnd);

              var upWeekStart = new Date(new Date(addDate(currentFirstDate, -7)).setHours(0, 0, 0, 0));
              var upWeekEnd = new Date(new Date(addDate(currentFirstDate, -1)).setHours(23, 59, 59, 999));
              console.log('本周', upWeekStart, upWeekEnd);


              document.querySelector('.date').innerHTML = `
                  <p>本周的开始${formatDate(date)} --- ${new Date(weekStart).getTime()} --- ${new Date(weekStart).toLocaleTimeString()} </p>
                  <p>本周的结束${formatDate(addDate(date, 1 * 6))} --- ${new Date(weekEnd).getTime()} --- ${new Date(addDate(date, 1 * 6)).toLocaleTimeString()} </p>
                  <p>上一周的开始${formatDate(upWeekStart)} --- ${new Date(upWeekStart).getTime()}---  ${new Date(addDate(currentFirstDate, -7)).toLocaleTimeString()} </p>
                  <p>上一周的结束${formatDate(upWeekEnd)} --- ${new Date(upWeekEnd).getTime()} --- ${new Date(addDate(currentFirstDate, -1)).toLocaleTimeString()} </p>
                  <p>`;
          };

          document.getElementById('last-week').onclick = function () {
              setDate(addDate(currentFirstDate, -7));
          };
          document.getElementById('next-week').onclick = function () {
              setDate(addDate(currentFirstDate, 7));
          };
          setDate(new Date());
    }
  }
</script>
