import DatasetList from './DatasetList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  datasets: state.datasets
});

const MainView = props => {
  return (
    <div>
      <DatasetList datasets={props.datasets} />
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(MainView);
