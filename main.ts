let message_array = [
"Hi",
"my",
"name",
"is",
"Trix"
]
basic.forever(function () {
    for (let index = 0; index <= message_array.length; index++) {
        radio.setGroup(index)
        radio.sendString("" + (message_array[index]))
        basic.showString("" + (message_array[index]))
    }
})
