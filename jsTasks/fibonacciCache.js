function fibCache(count) {
    let cache = [];

    if (count < 0) return 0;

    if (count === 0 || count === 1) return count;

    if (!cache[count]) {
        cache[count] = fibCache(count - 1) + fibCache(count - 2);

    }
    return cache[count];

}

console.log(fibCache(6));
