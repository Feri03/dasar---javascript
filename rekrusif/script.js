function cetakAngka(n) {
    if(n === 0)
        console.log(n);
        cetakAngka(n-1);
}
cetakAngka(5);