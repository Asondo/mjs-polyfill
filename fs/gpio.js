/*
* Clone of api_gpio.js with classic export
* Works only with new polyfill.js
* */

module.exports = {
    // ## **`gpio.setMode(pin, mode)`**
    // Set GPIO pin mode.
    // `mode` can be either `gpio.MODE_INPUT` or `gpio.MODE_OUTPUT`.
    setMode: ffi('int mgos_gpio_set_mode(int,int)'),
    MODE_INPUT: 0,
    MODE_OUTPUT: 1,

    // ## **`gpio.setPull(pin, pullType)`**
    // Set GPIO pin pull type.
    // `pullType` can be either `gpio.PULL_NONE`, `gpio.PULL_UP`, or `gpio.PULL_DOWN`.
    setPull: ffi('int mgos_gpio_set_pull(int,int)'),
    PULL_NONE: 0,
    PULL_UP: 1,
    PULL_DOWN: 2,

    // ## **`gpio.setupInput(pin, pullType)`**
    // Setup pin as input and configure pull type.
    // `pullType` can be either `gpio.PULL_NONE`, `gpio.PULL_UP`, or `gpio.PULL_DOWN`.
    setupInput: ffi('int mgos_gpio_setup_input(int,int)'),

    // ## **`gpio.setupOutput(pin, level)`**
    // Setup pin as output and set initial level, 0 or 1.
    // Avoids spurious transitions: applies level first, then sets mode.
    setupOutput: ffi('int mgos_gpio_setup_output(int,int)'),

    // ## **`gpio.toggle(pin)`**
    // Toggle the level of certain GPIO pin.
    // Return value: 0 or 1, indicating the resulting pin level.
    toggle: ffi('int mgos_gpio_toggle(int)'),

    // ## **`gpio.write(pin, level)`**
    // Set GPIO pin level to either 0 or 1. Return value: none.
    write: ffi('void mgos_gpio_write(int,int)'),

    // ## **`gpio.read(pin)`**
    // Read GPIO pin level. Return value: 0 or 1.
    read: ffi('int mgos_gpio_read(int)'),

    // ## **`gpio.enableInterrupt(pin)`**
    // Enable interrupts on GPIO pin.
    // This function must be called AFTER the interrupt handler is installed.
    // Return value: 1 in case of success, 0 otherwise.
    enableInterrupt: ffi('int mgos_gpio_enable_int(int)'),

    // ## **`gpio.disableInterrupt(pin)`**
    // Disable interrupts on GPIO pin.
    // Return value: 1 in case of success, 0 otherwise.
    disableInterrupt: ffi('int mgos_gpio_disable_int(int)'),

    // ## **`gpio.blink(pin, on_ms, off_ms)`**
    // A utility function that takes care of blinking an LED.
    // The pin must be configured as output first.
    // On (output "1") and off ("0") times are specified in milliseconds.
    // Set to (0, 0) to disable.
    // Return value: 1 on success, 0 on failure.
    blink: ffi('int mgos_gpio_blink(int, int, int)'),

    // ## **`gpio.setInterruptHandler(pin, mode, handler)`**
    // Install GPIO interrupt handler. `mode` could be one of: `GPIO.INT_NONE`,
    // `gpio.INT_EDGE_POS`, `gpio.INT_EDGE_NEG`, `gpio.INT_EDGE_ANY`,
    // `gpio.INT_LEVEL_HI`, `gpio.INT_LEVEL_LO`.
    // Return value: 1 in case of success, 0 otherwise.
    // Example:
    // ```javascript
    // gpio.setMode(pin, gpio.MODE_INPUT);
    // gpio.setInterruptHandler(pin, gpio.INT_EDGE_NEG, function(pin) {
    //    print('Pin', pin, 'got interrupt');
    // }, null);
    // gpio.enableInterrupt(pin);
    // ```
    setInterruptHandler: ffi('int mgos_gpio_set_int_handler(int,int,void(*)(int,userdata),userdata)'),
    INT_NONE: 0,
    INT_EDGE_POS: 1,
    INT_EDGE_NEG: 2,
    INT_EDGE_ANY: 3,
    INT_LEVEL_HI: 4,
    INT_LEVEL_LO: 5,

    // ## **`gpio.setButtonHandler(pin, pull, intMode, period, handler)`**
    // Install
    // GPIO button handler. `pull` is pull type, `intMode` is interrupt mode,
    // `period` is debounce interval in milliseconds, handler is a function that
    // receives pin number.
    // Return value: 1 in case of success, 0 otherwise.
    // Example:
    // ```javascript
    // gpio.setButtonHandler(pin, gpio.PULL_UP, gpio.INT_EDGE_NEG, 200, function(x) {
    //   print('Button press, pin: ', x);
    // }, null);
    // ```
    setButtonHandler: ffi('int mgos_gpio_set_button_handler(int,int,int,int,void(*)(int, userdata), userdata)'),
};
