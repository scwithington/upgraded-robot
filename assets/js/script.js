var todaysDate = moment().format('dddd, MMMM D, YYYY');
var currentTime = moment().format('hh:mm:ss');

var myHours = [
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
];

$('#currentDay').text(todaysDate);

console.log(currentTime, todaysDate);

setInterval(function() {
    $('#whatTimeIsIt').text(currentTime);
}, 1000);

$(document).on('click', 'button', function () {
    var saveText = (this).attr();
    var saveHour = (this).attr('');

    localStorage.setItem(saveHour, saveText);
}
)