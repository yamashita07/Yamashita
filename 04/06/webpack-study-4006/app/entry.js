'use strict';
import dc from 'damage-calc';
document.writeln(
  '<p>攻撃力 100, 防御 50, 防御貫通　30のダメージは、' +
  dc.effectiveDamage(100, 50, 30) + '</p>');
  