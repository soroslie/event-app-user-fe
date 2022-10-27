import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PageHeader from '../components/layout/PageHeader';
import EventList from '../components/pages/event/EventList';
import { useGetEventsQuery } from '../store/slices/apiSlice';
import SelectEntriesTable from '../components/input/SelectEntries';
import { selectEventSortBy, selectShowLimit, selectSort } from '../constants/selectData';

function Events() {
  const { email } = useSelector((state) => state.profile);

  const [showBookmark, setShowBookmark] = useState(false);
  const [query, setQuery] = useState({
    search: '',
    sort: 'ASC',
    sortBy: 'name',
    limit: 10,
  });

  const {
    data,
    error,
    isFetching: loading,
  } = useGetEventsQuery({
    search: query.search,
    limit: query.limit,
    sort: query.sort,
    sortBy: query.sortBy,
    bookmark: showBookmark,
  });

  const onSortHandler = (e) => {
    if (e.target.name === 'limit') {
      setQuery({ ...query, limit: e.target.value });
    }
    if (e.target.name === 'sort') {
      setQuery({ ...query, sort: e.target.value });
    }
    if (e.target.name === 'sortBy') {
      setQuery({ ...query, sortBy: e.target.value });
    }
  };

  const onSearchHandler = (e) => {
    const delayDebounceFn = setTimeout(() => {
      setQuery({ ...query, search: e.target.value });
    }, 3000);
    return () => clearTimeout(delayDebounceFn);
  };

  return (
    <div>
      <PageHeader title="browse events" />
      <div className="m-4">
        {email && (
        <div className="flex">
          <p className="mr-2">Show Bookmark</p>
          <input type="checkbox" onChange={() => setShowBookmark(!showBookmark)} checked={showBookmark} id="switch" />
          <label className="toggle-checkbox" htmlFor="switch">Toggle</label>
        </div>
        )}
        <div
          className="flex items-center mx-auto max-w-screen-sm my-3 "
        >
          <div className="relative w-full">
            <input
              onChange={onSearchHandler}
              name="search"
              type="text"
              id="simple-search"
              className="placeholder:text-center text-center bg-gray-50 border border-gray-300  text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="&#x1F50E; Search event name"
            />
          </div>
        </div>
        <div className="lg:flex mb-3 lg:justify-between">
          <div className="flex flex-row align-middle items-center ">
            <div className="mr-2">Show</div>
            <SelectEntriesTable
              onChange={onSortHandler}
              data={selectShowLimit}
              name="limit"
            />
            <p className="ml-2">Entries</p>
          </div>
          <div className="flex flex-row align-middle items-center content-center">
            <div className="mr-2">Sort By</div>
            <SelectEntriesTable
              data={selectEventSortBy}
              onChange={onSortHandler}
              name="sortBy"
            />
            <div className="ml-2">
              <SelectEntriesTable
                data={selectSort}
                onChange={onSortHandler}
                name="sort"
              />
            </div>
          </div>
        </div>
      </div>
      <EventList
        data={!loading && !error ? data.data : []}
        loading={!!(loading && !error)}
        error={!loading && !error ? error : null}
      />
    </div>
  );
}

export default Events;
