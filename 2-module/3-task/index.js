let calculator = {

  read(a, b) {
    this.a = a;/* +prompt("Введите первое число: ", ""); */
    this.b = b;/* +prompt("Введите второе число: ", ""); */
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
