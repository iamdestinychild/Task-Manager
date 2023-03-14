const notFound = (req, res) => {
    res.status('404').send('not found error');
}

module.exports = notFound;