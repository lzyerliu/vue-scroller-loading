# vue-scroller-loading ![vue](https://img.shields.io/badge/vue-%20v2.x%20-green.svg)

[Vue Scroller Loading](https://github.com/lzyerliu/vue-scroller-loading) support smooth scroll, pull to refresh & infinite loading.

## Reference

See also [Vue-Scroller](https://github.com/wangdahoo/vue-scroller) doing recursion instead of timer(setInterval) to improve performance.

## Demo

[https://lzyerliu.github.io/vue-scroller-loading](https://lzyerliu.github.io/vue-scroller-loading/doc/index.html)

## Usage

``` bash
# install
npm install vue-scroller-loading -S (or cnpm install vue-scroller-loading -S)
```

```js
/* ignore this if you include vue-scroller.js by <script> tag from a cdn, such as unpkg */
import Vue from 'vue'
import Scroller from 'vue-scroller-loading'
Vue.use(Scroller)
```

```html
<scroller
  :on-refresh="refresh"
  :on-infinite="infinite"
> 
  <!-- content to here -->
</scroller>
```

## API

#### vue-scroller-loading component attributes:

| Attr. Name | Description | Required | Default Value |
|-----|-----|-----|-----|
| onRefresh | pull to refresh callback | N | - |
| onInfinite | infinite loading callback | N | - |
| refreshText | tips of `pull-to-refresh` | N | 下拉刷新 |
| releaseText | tips of `pull-to-refresh` | N | 松开更新 |
| noDataText | tips of `no-more-data` when `infinite-loading` finished | N | 没有更多数据 |
| width | scroller container width | N | `100%` |
| height | scroller container height | N | `100%` |
| snapping | enable snapping mode | N | `false` |
| snappingWidth | snapping width | N | 100 (stand for 100px) |
| snappingHeight | snapping height | N | 100 |
| refreshLayerColor | text color of `pull-to-refresh` layer | N | #999 |
| loadingLayerColor | text color of `infinite-loading` layer | N | #999 |
| minContentHeight | min content height (px) of `scroll-content` | N | 0 |

#### Scroller vm instance methods:

- `resize()` resize scroller content (**deprecated, cause the scroller's content resizes self automatically**)
- `triggerPullToRefresh()` start pull-to-refresh manually
- `finishPullToRefresh()` stop pull-to-refresh
- `finishInfinite(isNoMoreData :Boolean)` stop infinite-loading
- `scrollTo(x:Integer, y:Integer, animate:Boolean)` scroll to a position in scroller content
- `scrollBy(x:Integer, y:Integer, animate:Boolean)` scroll by a position in scroller content
- `getPosition :Object` get current position of scroller content
