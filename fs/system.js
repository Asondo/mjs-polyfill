/*
* Clone of api_sys.js with classic export
* Works only with new polyfill.js
* */

module.exports = {
    // ## **`system._sbuf(len)`**
    // Helper function to allocate string of at least given length. Note that
    // the resulting string is usually bigger than this, and it is always
    // longer than 5 bytes; that's to guarantee that the string data is stored in
    // a common buffer and not inlined into mjs_val_t, thus the buffer can be
    // used as an "output" buffer: a string can be passed to some function which
    // will alter the contents, and these changes will be visible to the caller.
    _sbuf: function(len) {
        let chunk = '          ', buf = chunk;
        while (buf.length < len) buf += chunk;
        return buf;
    },

    // ## **`system.calloc(nmemb, size)`**
    // Allocate a memory region.
    // Note: currently memory allocated this way must be explicitly released with
    // `free()`.
    malloc: ffi('void *malloc(int)'),
    free: ffi('void free(void *)'),

    // ## **`system.totalRam()`**
    // Return total available RAM in bytes.
    totalRam: ffi('int mgos_get_heap_size()'),

    // ## **`system.freeRam()`**
    // Return free available RAM in bytes.
    freeRam: ffi('int mgos_get_free_heap_size()'),

    // ## **`system.reboot(ms)`**
    // Reboot the system after `ms` milliseconds. Return value: none.
    reboot: ffi('void mgos_system_restart_after(int)'),

    // ## **`system.uptime()`**
    // Return number of seconds since last reboot.
    uptime: ffi('double mgos_uptime()'),

    // ## **`system.usleep(microseconds)`**
    // Sleep given number of microseconds.
    // Return value: none.
    usleep: ffi('void mgos_usleep(int)'),

    // ## **`system.wdtFeed()`**
    // Feed the watchdog timer.
    // Return value: none.
    wdtFeed: ffi('void mgos_wdt_feed()')
};