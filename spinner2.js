let animation = [ '|', '/', '-', '\\', '|', '/', '-', '\\', '|' ];
for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${animation[i]}   `);

    if (i === animation.length - 1) process.stdout.write(`\n`);
  }, 100 + i * 200);
}
