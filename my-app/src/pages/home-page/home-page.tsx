import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux'

import { CitySearch } from "../../components/city-search"
import { CityActionTypes, CityProps, CityStateProps } from '../../data/interfaces';
import { cityAdd, cityDelete } from '../../stores/city-stores/city-actions';

class Home extends React.Component<HomeProps> {
  render() {
    return <div>
      <CitySearch
        onAddCity={this.props.onAddCity}
        onRemoveCity={this.props.onRemoveCity}
      />
    </div>
  }
}

interface HomeProps {
  cities: CityProps[],
  onAddCity: (data: any) => void
  onRemoveCity: (id: number) => void
}

const mapStateToProps = (state: CityStateProps) => {
  return {
    cities: state.cities
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CityActionTypes>) => {
  return {
    onAddCity: (data: any) => dispatch(cityAdd(data)),
    onRemoveCity: (id: number) => dispatch(cityDelete(id))
  };
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home)