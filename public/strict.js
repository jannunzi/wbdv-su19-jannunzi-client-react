"use strict"

var x = 123
var y = 123
var z = x === y

// C 1 -- * M 1 -- * L 1 -- * T
// /api/courses/:cid
// /C - all Cs
// /C/123 - one C
// /C/234/M - all Ms belonging to C
// /M/345 - one M
// A 1 -- * M, M 1 -- * A --> A * -- * M
// /A -- all actors, regardless of movie
// /A/1 -- one actor
// /A/1/M -- all movies for A 1
// /M -- all movies, regardless of actor
// /M/2 -- one movie
// /M/2/A -- all actors for M 2
// /A/1/M
// /M/2/A
// POST /A/1/M/2 -- A 1 acts in M 2
// POST /M/2/A/1 -- A 1 acts in M 2
// DELETE /A/1/M/2 -- A 1 no longer acts in M 2
// DELETE /M/2/A/1 -- A 1 no longer acts in M 2
// A * -- * M ==> A 1 -- * A2M * -- 1 M