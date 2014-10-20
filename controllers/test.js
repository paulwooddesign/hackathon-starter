/**
 * GET /
 * Test page.
 */

exports.getTest = function(req, res) {
  res.render('test', {
    title: 'Test'
  });
};
