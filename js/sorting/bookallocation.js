/*
    JavaScript code for Book Allocation problem to find the
    minimum value of the maximum number of pages
*/
function isPossible(pages, n, m, numPages) {
    let cntStudents = 1;
    let curSum = 0;
    for (let i = 0; i < n; i++) {
        if (pages[i] > numPages) {
            return false;
        }
        if (curSum + pages[i] > numPages) {
            cntStudents += 1;
            curSum = pages[i];
            if (cntStudents > m) {
                return false;
            }
        } else {
            curSum += pages[i];
        }
    }
    return true;
}

function allocateBooks(pages, n, m) {
    if (n < m) {
        return -1;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += pages[i];
    }

    let start = 0;
    let end = sum;
    let result = Number.MAX_SAFE_INTEGER;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (isPossible(pages, n, m, mid)) {
            result = Math.min(result, mid);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return result;
}

// Example usage:
const n = 4;
const m = 2;
const pages = [10, 20, 30, 40];
console.log(`The minimum value of the maximum number of pages in book allocation is: ${allocateBooks(pages, n, m)}`);
