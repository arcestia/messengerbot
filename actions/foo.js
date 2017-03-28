exports.regex = /^foo/;

exports.callback = function fooCallback(payload, reply) {
  reply({ text: 'You have running foo!' }, (err) => {
    if (err) throw err;

    console.log('Echoed back');
  });
};
