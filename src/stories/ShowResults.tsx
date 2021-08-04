import useSWR from 'swr';
import { SearchQuery } from '../types/types';
import getTrackResults from '../utils/getTrackResults';
import filterDiscogsResults from '../utils/filterDiscogsResults';
import SkeletonLoader from './SkeletonLoader';
import { ErrorMessage } from './ErrorMessage';
import { DiscogsResults } from './DiscogsResults';
import { YoutubeResult } from './YoutubeResult';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ShowResultsProps extends SearchQuery {}

const ShowResults = ({ artist, track }: ShowResultsProps): JSX.Element => {
  const url = `/api/trackSearch/?artist=${artist}&track=${track}`;
  const { data, error } = useSWR(url, getTrackResults);

  if (error) return <ErrorMessage message={error.message} />;

  if (!data) return <SkeletonLoader />;

  const discogsResults = filterDiscogsResults(data.discogsResults);
  const { youtubeResult } = data;

  return (
    <div className="flex flex-col">
      <DiscogsResults results={discogsResults} />
      <YoutubeResult embedId={youtubeResult} />
    </div>
  );
};

export default ShowResults;
