$(function() {
    let color_list = ['#eceded', '#d1d3d4', '#0b5b9b9', '#989d9d', '#7b8282', '#616869', '#424c4d', '#253031']
    setInterval(() => {
        const currentdate = new Date()
        const seconds_arm = $('.seconds_arm')
        const minutes_arm = $('.minutes_arm')
        const hours_arm = $('.hours_arm')

        let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear()

        let time = currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds()

        $('.watch .container').text(time)
        $('.date').text(datetime)

        let seconds = currentdate.getSeconds()
        let minutes = currentdate.getMinutes()
        let hours = currentdate.getHours()
        let seconds_angle = (seconds / 60) *  360
        let minutes_angle = (minutes / 60) * 360
        let hours_angle = (hours / 12) * 360
        if (seconds == 31 || seconds == 33) {
            seconds_angle = Math.floor(seconds_angle)
        } else if (seconds == 21 || seconds == 42) {
            seconds_angle = Math.ceil(seconds_angle)
        } else {
            seconds_angle = (seconds / 60) *  360
        }
        seconds_arm.css('transform', 'rotate(' + seconds_angle + 'deg)')
        minutes_arm.css('transform', 'rotate(' + minutes_angle + 'deg)')
        hours_arm.css('transform', 'rotate(' + hours_angle + 'deg)')
    }, 1000)
    let i = 0
    setInterval(() => {
    function getRandomNumber(any) {
        return Math.floor(Math.random() * any)
    }
    let border = '4px dashed ' + color_list[i]
    $('.digital').css('border', border)
    i++
    if (i > color_list.length) {
        i = 0
    }
    }, 300)
})

