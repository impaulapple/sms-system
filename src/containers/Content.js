import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import routes from '../routes'
import ProtectedRouter from '../components/ProtectedRouter';

const Content = () => {
  return (
    <React.Fragment>
      <Suspense >
        <Switch>
          {routes.map((route, idx) => {
            return route.component && (
              !route.protacted ?
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  params={route}
                  children={() => { return <route.component /> }}
                />
                :
                <ProtectedRouter
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  params={route}
                  children={route.component}
                />
            )
          })}
          <Redirect from="/" to={routes[0]['path']} />
        </Switch>
      </Suspense>

    </React.Fragment>
  )
}

export default Content;