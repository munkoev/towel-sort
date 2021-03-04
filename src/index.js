
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let vector = [],
        rows = [],
        bool = true;
    if (typeof matrix === 'undefined') {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            rows = matrix[i];
            if (bool===true) {
                for (let j = 0; j < rows.length; j++) {
                    vector.push(matrix[i][j]);
                }
            } else {
                for (let j = rows.length-1; j > -1; j--) {
                    vector.push(matrix[i][j]);
                }
            }
            bool = !bool;
        }
        return vector;
    }
}
