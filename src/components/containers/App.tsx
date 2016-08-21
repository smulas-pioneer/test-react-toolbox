import {AppBar, Navigation, Link, Panel, IconButton, Button} from 'react-toolbox';
import * as React from 'react';
import {withRouter, IRouter} from 'react-router';


const AppBarTest = (props) => {
  const {router }: { router: IRouter } = props;

  const onClick = (path: string) => {
    router.push(path);
  }

  const link = (path, title) => <Button inverse={true} onClick = {() => { onClick(path) } } label={title} />

  return (
    <Panel>
      
      <AppBar fixed flat>
        <IconButton icon='menu' inverse={ true } />
        <Navigation>
        {link('products', 'Products') }
        {link('list', 'Current List') }
        </Navigation>
      </AppBar>
      <div style={{ flex: 1, padding: '1.8rem' }}>
        <div style={{ height: 60 }}/>
        {props.children}
      </div>
    </Panel>
  )
}

export default withRouter(AppBarTest);




