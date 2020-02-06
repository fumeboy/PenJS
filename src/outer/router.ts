import { createBrowserRouter } from 'franxx'
export const router = createBrowserRouter()
export const views = {}
let loadJS = (url, callback) => {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onload = callback
    document.getElementsByTagName('head')[0].appendChild(script)
}
let router_view = document.createTextNode('')
document.querySelector('#router_view').appendChild(router_view)
let loadView = (path) => {
    if(views[path]){
        let elem = views[path].page
        document.title = views[path].title
        router_view.replaceWith(elem)
        router_view = elem
        window['outer'].loading.setLoaded()
    }else {
        loadJS(path+'.js', () => {
            loadView(path)
        })
    }
}
router.add('/', ()=>loadView('/index'))
//[routes]
router.add('/ComputerOrganization/Chapter1/1.html', ()=>loadView('/ComputerOrganization/Chapter1/1'))
router.add('/ComputerOrganization/Chapter1/2.html', ()=>loadView('/ComputerOrganization/Chapter1/2'))
router.add('/ComputerOrganization/Chapter1/3.html', ()=>loadView('/ComputerOrganization/Chapter1/3'))
router.add('/ComputerOrganization/Chapter1/4.html', ()=>loadView('/ComputerOrganization/Chapter1/4'))
router.add('/ComputerOrganization/Chapter1/5.html', ()=>loadView('/ComputerOrganization/Chapter1/5'))
router.add('/ComputerOrganization/Chapter1/6.html', ()=>loadView('/ComputerOrganization/Chapter1/6'))
router.add('/ComputerOrganization/Chapter2/1.html', ()=>loadView('/ComputerOrganization/Chapter2/1'))
router.add('/ComputerOrganization/Chapter2/2.html', ()=>loadView('/ComputerOrganization/Chapter2/2'))
router.add('/ComputerOrganization/Chapter2/3.html', ()=>loadView('/ComputerOrganization/Chapter2/3'))
router.add('/ComputerOrganization/Chapter2/4.html', ()=>loadView('/ComputerOrganization/Chapter2/4'))
router.add('/ComputerOrganization/Chapter2/5.html', ()=>loadView('/ComputerOrganization/Chapter2/5'))
router.add('/ComputerOrganization/Chapter2/6.html', ()=>loadView('/ComputerOrganization/Chapter2/6'))
router.add('/ComputerOrganization/Chapter3/1.html', ()=>loadView('/ComputerOrganization/Chapter3/1'))
router.add('/ComputerOrganization/Chapter3/2.html', ()=>loadView('/ComputerOrganization/Chapter3/2'))
router.add('/ComputerOrganization/Chapter3/3.html', ()=>loadView('/ComputerOrganization/Chapter3/3'))
router.add('/ComputerOrganization/Chapter3/4.html', ()=>loadView('/ComputerOrganization/Chapter3/4'))
router.add('/ComputerOrganization/Chapter3/5.html', ()=>loadView('/ComputerOrganization/Chapter3/5'))
router.add('/ComputerOrganization/Chapter3/6.html', ()=>loadView('/ComputerOrganization/Chapter3/6'))
router.add('/ComputerOrganization/Chapter4/1.html', ()=>loadView('/ComputerOrganization/Chapter4/1'))
router.add('/ComputerOrganization/Chapter4/2.html', ()=>loadView('/ComputerOrganization/Chapter4/2'))
router.add('/ComputerOrganization/Chapter4/3.html', ()=>loadView('/ComputerOrganization/Chapter4/3'))
router.add('/ComputerOrganization/Chapter4/4.html', ()=>loadView('/ComputerOrganization/Chapter4/4'))
router.add('/ComputerOrganization/Chapter4/5.html', ()=>loadView('/ComputerOrganization/Chapter4/5'))
router.add('/ComputerOrganization/Chapter4/6.html', ()=>loadView('/ComputerOrganization/Chapter4/6'))
router.add('/ComputerOrganization/Chapter5/1.html', ()=>loadView('/ComputerOrganization/Chapter5/1'))
router.add('/ComputerOrganization/Chapter5/2.html', ()=>loadView('/ComputerOrganization/Chapter5/2'))
router.add('/ComputerOrganization/Chapter5/3.html', ()=>loadView('/ComputerOrganization/Chapter5/3'))
router.add('/ComputerOrganization/Chapter5/4.html', ()=>loadView('/ComputerOrganization/Chapter5/4'))
router.add('/ComputerOrganization/Chapter5/5.html', ()=>loadView('/ComputerOrganization/Chapter5/5'))
router.add('/ComputerOrganization/Chapter5/6.html', ()=>loadView('/ComputerOrganization/Chapter5/6'))
router.add('/ComputerOrganization/Chapter6/1.html', ()=>loadView('/ComputerOrganization/Chapter6/1'))
router.add('/ComputerOrganization/Chapter6/2.html', ()=>loadView('/ComputerOrganization/Chapter6/2'))
router.add('/ComputerOrganization/Chapter6/3.html', ()=>loadView('/ComputerOrganization/Chapter6/3'))
router.add('/ComputerOrganization/Chapter6/4.html', ()=>loadView('/ComputerOrganization/Chapter6/4'))
router.add('/ComputerOrganization/Chapter6/5.html', ()=>loadView('/ComputerOrganization/Chapter6/5'))
router.add('/ComputerOrganization/Chapter6/6.html', ()=>loadView('/ComputerOrganization/Chapter6/6'))
router.add('/ComputerOrganization/Chapter7/1.html', ()=>loadView('/ComputerOrganization/Chapter7/1'))
router.add('/ComputerOrganization/Chapter7/2.html', ()=>loadView('/ComputerOrganization/Chapter7/2'))
router.add('/ComputerOrganization/Chapter7/3.html', ()=>loadView('/ComputerOrganization/Chapter7/3'))
router.add('/ComputerOrganization/Chapter7/4.html', ()=>loadView('/ComputerOrganization/Chapter7/4'))
router.add('/ComputerOrganization/Chapter7/5.html', ()=>loadView('/ComputerOrganization/Chapter7/5'))
router.add('/ComputerOrganization/Chapter7/6.html', ()=>loadView('/ComputerOrganization/Chapter7/6'))
router.add('/ComputerOrganization/Chapter8/1.html', ()=>loadView('/ComputerOrganization/Chapter8/1'))
router.add('/ComputerOrganization/Chapter8/2.html', ()=>loadView('/ComputerOrganization/Chapter8/2'))
router.add('/ComputerOrganization/Chapter8/3.html', ()=>loadView('/ComputerOrganization/Chapter8/3'))
router.add('/ComputerOrganization/Chapter8/4.html', ()=>loadView('/ComputerOrganization/Chapter8/4'))
router.add('/ComputerOrganization/Chapter8/5.html', ()=>loadView('/ComputerOrganization/Chapter8/5'))
router.add('/ComputerOrganization/Chapter8/6.html', ()=>loadView('/ComputerOrganization/Chapter8/6'))
router.add('/ComputerOrganization/index.html', ()=>loadView('/ComputerOrganization/index'))
router.add('/index.html', ()=>loadView('/index'))
router.add('/webpack/webpack-loader.html', ()=>loadView('/webpack/webpack-loader'))
