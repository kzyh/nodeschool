function foo() {
    var bar;
    quux = 2;
    function zip() {
        bar = true;
        var quux = 1;
    }
    return zip;
}
