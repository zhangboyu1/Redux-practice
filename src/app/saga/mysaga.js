import { put, takeEvery, fork, take, takeLatest, all, call } from 'redux-saga/effects'  //API for redux-saga...
import { searchWeather } from '../Api/Api'


function* helloSaga() {
    // 这个function什么时候被执行的？
    // 只要执行，就说明saga配置成功了。。
    console.log('Hello Sagas!')
}

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
    console.log('incre')
    yield delay(3000)
    yield put({ type: 'DECREMENT' })
    // 把‘DECREMENT'交给saga middleware。。。。。然后由middle解析。如果是put的话。。。
    // 再由sagamiddleware 把 对应的action dispatch 到store中去。
}


function* fork1() {
    yield delay(10000)
    console.log('fork1')
    // 把‘DECREMENT'交给saga middleware。。。。。然后由middle解析。如果是put的话。。。
    // 再由sagamiddleware 把 对应的action dispatch 到store中去。
}


function* fork2() {
    console.log('fork2 start')
    yield delay(1000)
    console.log('fork2 over')
    // 把‘DECREMENT'交给saga middleware。。。。。然后由middle解析。如果是put的话。。。
    // 再由sagamiddleware 把 对应的action dispatch 到store中去。
}


function* fork3() {
    console.log('fork3 start')
    yield delay(1000)
    console.log('fork3 over')
    // 把‘DECREMENT'交给saga middleware。。。。。然后由middle解析。如果是put的话。。。
    // 再由sagamiddleware 把 对应的action dispatch 到store中去。
}

function* fetchData() {
    try {
        const data = yield call(searchWeather)
        console.log('lalalal')
        //问题就来了。。。。如果我不用then这个语法...它怎么知道我的data是否已执行完成
        console.log(data)
        yield call(fork1)
        yield call(fork2)
        yield call(fork3)
        yield put({ type: "FETCH_SUCCEEDED", data })
    } catch (error) {
        yield put({ type: "FETCH_FAILED", error })
    }
}


function* watchFetchData() {
    // 可以把所有的异步操作都放到一起进行。。。。

    // 它可以用来控制流程。。。。 
    // The generator will suspended until the action that match with the defined pattern is dispatched to the sotre.
    yield take('DECREMENT_ASYNC', incrementAsync)
    // take 是直接dispatch。。。。 
    yield takeLatest('FETCHDATA_ASYNC', fetchData)
}

// 也就是说这个saga文件下最终只能暴露一个root saga.....
export default function* rootSaga() {
    yield all([
        // all used to combine different saga into one
        helloSaga(),
        // watchIncrementAsync(),
        watchFetchData()
    ])
}