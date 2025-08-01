import chalk from 'chalk';

function colorMessage() {
    const message = `
${chalk.blue('Welcome')} to the ${chalk.bold.green('Daily Challenge')}! 🙌
Let's make today ${chalk.magenta('productive')} and ${chalk.yellow('fun')}! 🎯
`;
        console.log(message);
}

export default colorMessage;