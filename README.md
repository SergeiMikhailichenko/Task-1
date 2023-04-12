    <div class="header">
    <h1 class="title">Блоко</h1>
    </div>
    <h2></h2>
    <div class="legend">
    <div class="Markdown">
    <p class="paragraph">До чего же разные идеи могут появляться у дизайнеров. Только что был получен очередной макет для сайдбара, но в нем есть только отдельные блоки разной формы, которыми необходимо заполнить сетку нашего компонента. Похоже, что блоки, как кирпичики, можно выкладывать друг на друга, и они выстраиваются таким образом, что в сайдбаре не остается пустого места.</p>
    <p class="paragraph">Условия:</p>
    <ul>
    <li>
    <p class="paragraph">Напишите функцию <code>layout</code>, которая будет заполнять эту сетку сверху вниз таким образом, чтобы не образовывались пустоты</p>
    </li>
    <li>
    <p class="paragraph">Функция на вход принимает массив уникальных блоков</p>
    </li>
    <li>
    <p class="paragraph">Сетка может быть разной ширины</p>
    </li>
    <li>
    <p class="paragraph">Блок имеет свой уникальный номер</p>
    </li>
    <li>
    <p class="paragraph">Форма блока произвольная, ширина всегда равна ширине сетки</p>
    </li>
    <li>
    <p class="paragraph">Блоки имеют возможность перевернуться, чтобы встроиться в сетку</p>
    </li>
    <li>
    <p class="paragraph">После того, как все блоки выстроятся, в компоненте не должно остаться пустот</p>
    </li>
    <li>
    <p class="paragraph">Сайдбар всегда заполняется полностью (висящих пустот на любом наборе данных не будет)</p>
    </li>
    <li>
    <p class="paragraph">Функция должна возвращать отчет о порядке выставления блоков и манипуляций с их поворотами</p>
    </li>
    </ul>
    <p class="paragraph"></p>
    <div class="code">
    <pre><code>interface Block {
        id: number;
        form: number[][];
    }
    
    interface LayoutResult {
        blockId: number;
        position: number;
        isRotated: boolean;
    }
    
    function layout(blocks: Block[]): LayoutResult[]  {
        // code
    }</code></pre>
    </div>
    <p class="paragraph"><strong>Примеры:</strong></p>
    <p class="paragraph"><em>Пример 1</em></p>
    <div class="code">
    <pre><code>const blocks = [{
        "id": 738,
        "form": [
          [1, 0],
          [1, 1]
        ]
      },
      {
        "id": 841,
        "form": [
          [1, 1],
          [0, 1]
        ]
    }];
    
    const result = [
      {
        "blockId": 738,
        "position": 1,
        "isRotated": false
      },
      {
        "blockId": 841,
        "position": 2,
        "isRotated": false
      }
    ];</code></pre>
    </div>
    <p class="paragraph"><em>Пример 2</em></p>
    <div class="code">
    <pre><code>const blocks = [{
        "id": 443,
        "form": [
          [1, 0, 1],
          [1, 1, 1]
        ]
      },
      {
        "id": 327,
        "form": [
          [0, 1, 0],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 0],
          [0, 1, 0]
        ]
      },
      {
        "id": 891,
        "form": [
          [0, 0, 1],
          [1, 0, 1],
          [1, 1, 1]
        ]
    }];
    
    const result = [
      {
        "blockId": 443,
        "position": 1,
        "isRotated": false
      },
      {
        "blockId": 327,
        "position": 2,
        "isRotated": true
      },
      {
        "blockId": 891,
        "position": 3,
        "isRotated": true
      }
    ];</code></pre>
    </div>
    <p class="paragraph"><em>Пример 3</em></p>
    <div class="code">
    <pre><code>const blocks = [{
        "id": 4892,
        "form": [
          [0, 0, 1],
          [1, 0, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1]
        ]
      },
      {
        "id": 1839,
        "form": [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 0, 0]
        ]
      },
      {
        "id": 8183,
        "form": [
          [0, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 0],
          [0, 1, 0]
        ]
    }];
    
    const result = [
      {
        "blockId": 4892,
        "position": 1,
        "isRotated": false
      },
      {
        "blockId": 8183,
        "position": 2,
        "isRotated": false
      },
      {
        "blockId": 1839,
        "position": 3,
        "isRotated": false
      }
    ];</code></pre>
    </div>
    <p class="paragraph"><em>Пример 4</em></p>
    <div class="code">
    <pre><code>const blocks = [{
        "id": 1,
        "form": [
          [1, 0, 1],
          [1, 1, 1],
          [1, 1, 1]
        ]
      },
      {
        "id": 2,
        "form": [
          [0, 0, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1]
        ]
      },
      {
        "id": 3,
        "form": [
          [0, 1, 1],
          [1, 1, 1],
          [0, 1, 0]
        ]
    }];
    
    const result = [
      {
        "blockId": 1,
        "position": 1,
        "isRotated": false
      },
      {
        "blockId": 3,
        "position": 2,
        "isRotated": false
      },
      {
        "blockId": 2,
        "position": 3,
        "isRotated": true
      }
    ];</code></pre>
    </div>
    </div>
    </div>
    <h2>Примечания</h2>
    <div class="notes">
    <div class="Markdown">
    <p class="paragraph">Решение должно представлять из себя Node.js модуль, экспортирующий функцию <code>layout</code>.</p>
    <div class="code">
    <pre><code>module.exports = function layout(blocks) { /* ... */ }</code></pre>
    </div>
    </div>
    </div>
    </div></article></div></section></div></div></div></div>