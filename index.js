const { exec } = require('child_process');

function forceDefaultBranchToCommit() {
  exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
    if (typeof stdout === 'string' && stdout.trim() !== 'develop') {
      console.log(
        '\x1b[31m%s\x1b[0m',
        'Erro: O BUILD só deve ocorrer dentro da branch DEVELOP.'
      );
      process.exit(1);
    }
  });
}

module.exports = forceDefaultBranchToCommit;