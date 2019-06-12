import React        from 'react';
import { mapStateWithProps } from '../../lib/rsflux';
import store from '../store';
import IncidentsTable from '../components/table/IncidentsTable';
import Loading from '../components/Loading';

const Home = (props) => {
  const { incidents } = props.state;
  return (
    <div className="table-responsive-sm">
      {
        incidents ? 
          <IncidentsTable incidents={ incidents }/>
          :
          <Loading />
      }
      
    </div>
  )
}

export default mapStateWithProps(store)(Home);