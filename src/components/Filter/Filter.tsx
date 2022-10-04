import classNames from 'classnames';
import { FilterStatus } from '../../types/Filter';

type Props = {
  filterStatus: FilterStatus
  onFilter: (filterStatus: FilterStatus) => void;
};

export const Filter: React.FC<Props> = ({ filterStatus, onFilter }) => {
  return (
    <nav className="filter" data-cy="Filter">
      <a
        data-cy="FilterLinkAll"
        href="#/"
        className={classNames(
          'filter__link',
          { selected: filterStatus === 'all' },
        )}
        onClick={() => onFilter('all')}
      >
        All
      </a>

      <a
        data-cy="FilterLinkActive"
        href="#/active"
        className={classNames(
          'filter__link',
          { selected: filterStatus === 'active' },
        )}
        onClick={() => onFilter('active')}
      >
        Active
      </a>
      <a
        data-cy="FilterLinkCompleted"
        href="#/completed"
        className={classNames(
          'filter__link',
          { selected: filterStatus === 'completed' },
        )}
        onClick={() => onFilter('completed')}
      >
        Completed
      </a>
    </nav>
  );
};