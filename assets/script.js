
    var currentDayEl = $('#currentDay');
    var containerEl = $('#container');

    //set background colors 
    function setColor(element, color) {
        element.css('background-color', color);
    }
    
    //event listener for the save button 
    function saveButton() {
        $(".saveBtn").on("click", function () {
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
    
            localStorage.setItem(time, text);
        })
    };
  
    //display current hour 
    function timeClock() {
        var currentHour = dayjs().hour();
        $(".time-block").each(function () {
            var colorcodedDiv = $(this).find(".description");
            var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
    
            if (blockTime < currentHour) {
                setColor(colorcodedDiv, "Light-grey");
                $(this).removeClass("future present").addClass("past");
            } else if (blockTime === currentHour) {
                setColor(colorcodedDiv, "Red");
                $(this).removeClass("past future").addClass("present");
            } else {
                setColor(colorcodedDiv, "Green");
                $(this).removeClass("present past").addClass("future");
            }
        });
    }
    
    //display current day 
    currentDayEl.text(dayjs().format('dddd, MMMM D, YYYY'));

    $('#hour7 .description').val(localStorage.getItem('hour7'));
    $('#hour8 .description').val(localStorage.getItem('hour8'));
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));
    
    saveButton();
    timeClock();