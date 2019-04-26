import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModule } from '../../actions/moduleActions';
import ModuleScreen from '../../components/ModuleScreen';
import NavInfo from '../../components/NavInfo';
import BlockSlick from '../../components/BlockSlick';
import Tasks from '../../components/Tasks';
import Todos from '../../components/Todos';
import Checkboard from '../../components/Checkboard';
import Recommendations from '../../components/Recomendations';
import Comments from '../../components/Comments';
import styles from './styles.module.scss';

class ModulePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getModuleFromProps } = this.props;
    getModuleFromProps(this.props.match.params.id);
  }

  render() {
    const { isLoading, payload } = this.props;
    console.log(payload, isLoading);

    if (isLoading) {
      return (
        <div className={styles.bg}><div className={styles.spinner} /></div>
      );
    }
    return (
      <div>
        <ModuleScreen header={payload.name} desc={payload.shortDesc.desc} />
        <NavInfo value2="Академия родительского мастерства" value3={payload.name} />
        <BlockSlick header="Задачи модуля" element={<Tasks text={payload.objectives} />} />
        <BlockSlick header="Проработать" style={{ backgroundColor: '#fafafa' }} element={<Todos elements={payload.tasks} />} />
        <BlockSlick header="Дополнительные задания" element={<Todos elements={payload.extra_tasks} />} />
        <BlockSlick header="Что проверить?" style={{ backgroundColor: '#fafafa' }} element={<Checkboard checklist={payload.checklist} dangerlist_header={payload.dangerlist_header} dangerlist={payload.dangerlist} />} />
        <BlockSlick header="Обратить внимание" element={<Recommendations data={payload.attentions} />} />
        <BlockSlick header="Частые вопросы" element={<Comments />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.moduleReducer.isLoading,
  payload: state.moduleReducer.payload,
});

const mapDispatchToProps = dispatch => ({
  getModuleFromProps: query => dispatch(getModule(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModulePage);
