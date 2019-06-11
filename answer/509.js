let F = [];
var fib = function (N) {
    if (N > F.length - 1) {
        F[0] = 0;
        F[1] = 1;
        for (let i = 2; i <= N; i++) {
            F[i] = F[i - 1] + F[i - 2];
        }
    }
    return F[N]
};