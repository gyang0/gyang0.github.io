This is one of my favorite CodeForces problems, because of how elegant the solution is. But I think the editorial can be better. I get that it's supposed to be mathematically rigorous, they need to keep it short, etc. But does that really warrant something like this?

<figure>
    <img src="/images/activity/20230916_CodeForces_XOR_1.png">
    <figcaption><a href="https://codeforces.com/problemset/problem/1847/C" target="_blank">Link to problem statement</a></figcaption>
</figure>

Will someone really learn from editorials like these? I doubt people will arrive at this math before working out the solution. The mathematical solution should probably come after explaining the intuition.

(My other peeve is that every problem statement includes a "story." Competitive programming &#8800; reading comprehension.)

Here's an attempt at a (hopefully) more intuitive solution:
## What we're given
- An array $a$ with $N$ elements
- Elements can be added to the end of $a$. New element will have value $a[i] \oplus a[i + 1] \oplus a[i + 2] \oplus ... \oplus a[N - 1]$, where $i$ is any index within the bounds of the array.
- Above procedure can be repeated as many times as we want.
- What's the maximum number that can be produced?

<br>

- $1 <= N <= 10^5$
- $0 <= a[i] <= 2^8$

## Editorial
1. Simulating a run is always a good idea. Let's see what happens when we add a new element, choosing index $i = 2$ as our "pivot point.
<figure>
    <img src="/images/activity/20230916_CodeForces_XOR_3.png">
    <figcaption>Simulating 1 run</figcaption>
</figure>

2. The hard part is that we can repeat the operation multiple times. What happens if we do that? Let's choose a second index $i = 4$ and repeat the operation.

<figure>
    <img src="/images/activity/20230916_CodeForces_XOR_4.png">
    <figcaption>Simulating 2 runs</figcaption>
</figure>

3. Now some key XOR concepts:
    - $x \oplus x = 0$
    - $x \oplus 0 = x$
    - $x \oplus y = y \oplus x$

4. Notice anything interesting? The expression for the added value cancels down to $a[2] \oplus a[3]$, which doesn't use any new values! The XOR of a subarray from $i = 2$ to $i = 3$, to be exact.

5. Any added value will just be the XOR of a subarray. This is important. You can do a few edge cases like $i = 0$ or $i = N$ to convince yourself that it works.

6. Great, so we just need to find the maximum XOR subarray...but a naive solution (choosing two indices and iterating all elements in between) would run in $O(N^3)$. This won't pass.

7. We can take advantage of XOR properties for an $O(2^8 N)$ solution. Let's call an XOR subaray that starts at $i = 0$ an XOR prefix. Then for every index $i$, update the prefix to be $\text{(previous XOR prefix)} \oplus a[i]$. Store the XOR prefixes that have appeared so far.

8. Then for every index, check $\text{(current XOR prefix)} \oplus \text{(a previous XOR prefix)}$ for all previous XOR prefixes. Compare these values with each other to find the maximum XOR subarray. There will be at most $2^8$ previous XOR prefixes, hence the $O(2^8 N)$ time complexity.

9. Why does this work? Any XOR prefix will start at $i = 0$. Say that a previous XOR prefix ended at $i = A$, and the current XOR prefix ends at $i = B$. Then $\text{(previous XOR prefix)} \oplus \text{(current XOR prefix)} = \text{XOR subarray from i = A to i = B}$, because the region from $i = 0$ to $i = A$ sort of "cancels out." So by XORing a current prefix with a past one, we can get the XOR subarray of elements in between.

## Code
```cpp
#include <bits/stdc++.h>;
using namespace std;

// Pragmas that work with CodeForces
#pragma GCC optimize("Ofast")
#pragma GCC target("avx2")

// 0 <= a[i] <= 2^8, so maximum bit length is 8
const int BIT_LEN = 8;

void solve(){
    int N;
    cin >> N;

    int a[N];
    for(int i = 0; i < N; i++){
        cin >> a[i];
    }

    // Whether the value has appeared as an XOR prefix
    // Set to false initially, except for 0, which is an identity.
    // 1 << 8 = 2^8
    bool appeared[(1 << BIT_LEN)];
    memset(appeared, false, (1 << BIT_LEN));
    appeared[0] = true;

    int curXORPrefix = 0;
    int ans = 0;

    for(int i = 0; i < N; i++){
        curXORPrefix ^= a[i];
        appeared[curXORPrefix] = true;

        for(int j = 0; j < (1 << BIT_LEN); j++){
            if(appeared[j])
                ans = max(ans, curXORPrefix ^ j);
        }
    }

    cout << ans << "\\n";
}

int main(){
    // Fast IO
    cin.tie(0)->ios_base::sync_with_stdio(0);

    // Each test case
    int T;
    cin >> T;
    for(int i = 0; i < T; i++){
        solve();
    }

    return 0;
}
```
<br />

Submission result:
<figure>
    <img style="width:1200px" src="/images/activity/20230916_CodeForces_XOR_2.png">
</figure>