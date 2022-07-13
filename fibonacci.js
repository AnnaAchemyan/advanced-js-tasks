function fibonacci(count) {
    if( count < 0 ) return 0;

    if( count === 0 || count === 1 ) return count;

    return fibonacci(count - 1 ) + fibonacci(count - 2 );
}

console.log(fibonacci(3));