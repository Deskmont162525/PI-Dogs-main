import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {Suspense, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getDogs, getTemperaments, getRazas, cleanUp} from './actions/index';

import Loading from './components/lazyloading/indexL';

const Nav = React.lazy(() => import('./components/nav/indexN'));
const Inicio = React.lazy(() => import('./components/inicio/indexI'));
const Detail = React.lazy(() => import('./components/dogCardDetail/indexCD'));
const FormDogs = React.lazy(() => import('./components/formDogs/indexFD'));

function App() {
  const dispatch = useDispatch();
  
  //obtengo los Dogs
  useEffect(() => {
    dispatch (getDogs());  
    return () => {
      dispatch(cleanUp());
    };   
  }, [dispatch]);

  //obtengo los temperamentos
  useEffect(() => {
    dispatch (getTemperaments());
  }, [dispatch])

  //obtengo las razas 
  useEffect(() => {
    dispatch(getRazas());
  }, [dispatch])




  return (
    <BrowserRouter>
      <div className="App">
        <Route>    
        <Suspense fallback={<Loading />}>      
          <Switch>
            <Route exact path="/" component={Inicio}>              
            </Route>            
          </Switch>
          
          <Switch>         
            <Route exact path="/dogs" component={Nav}>                          
            </Route>  

          </Switch>
        
          <Switch>
            <Route exact path="/dogs/detail/:idDogs" component={Detail}>                          
            </Route>            
          </Switch>
          
          <Switch>
            <Route exact path="/dogs/forms" component={FormDogs}>                          
            </Route>            
          </Switch>
        </Suspense>
        </Route>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
