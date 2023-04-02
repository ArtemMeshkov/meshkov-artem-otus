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
  onAddCity: (data: ({id: number; name: string; })) => void
  onRemoveCity: (id: number) => void
}

const mapStateToProps = (state: CityStateProps) => ({
    cities: state.cities
})

const mapDispatchToProps = (dispatch: Dispatch<CityActionTypes>) => ({
    onAddCity: (data: ({id: number; name: string; })) => dispatch(cityAdd(data)),
    onRemoveCity: (id: number) => dispatch(cityDelete(id))
})

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home)