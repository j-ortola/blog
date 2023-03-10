const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.reduce((partial, a) => partial + a.likes, 0)

const favoriteBlog = (blogs) => blogs.reduce((a, b) => (a.likes > b.likes) ? a : b)

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}