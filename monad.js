'use strict';

const Monad = (function () {
  let __val;
  
  return {
    of (value) {
      __val = value;
      return this;
    },
    map (mapArrow) {
      return Monad.of(mapArrow(__val));
    },
    flatMap (flatMapArrow) {
      return flatMapArrow(__val);
    }
  };
}());

Monad.of(39)
  .map(v => v + 3)
  .flatMap(v => Monad.of(v))
  .map(v => console.log(v))
  