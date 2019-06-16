import GrammsDisplay from '../Components/GrammsDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    carbonGram:(parseFloat(state.caloriesReducer.carbon).toFixed(2)).toString(),
    fatGram:(parseFloat(state.caloriesReducer.fat).toFixed(2)).toString(),
    proteinGram:(parseFloat(state.caloriesReducer.protein).toFixed(2)).toString(),
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GrammsDisplay)