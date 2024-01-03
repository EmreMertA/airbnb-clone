import getCurrentUser from './actions/getCurrentUser';
import getListings, { IListingsParams } from './actions/getListings';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import ListingsCard from './components/listings/ListingsCard';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className='
           pt-24
           grid
           grid-cols-1
           sm:grid-cols-2
           md:grid-cols-3
           lg:grid-cols-4
           xl:grid-cols-5
           2xl:grid-cols-6
           gap-8
          '
        >
          {listings.map((listings: any) => {
            return (
              <ListingsCard
                currentUser={currentUser}
                key={listings.id}
                data={listings}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};
export default Home;
