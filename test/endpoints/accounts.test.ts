import { beforeAll, describe, expect, it } from 'vitest';
import { CarpClient } from '@/client';
import { setupResearcherClient } from '@/shared';

describe('Accounts service', () => {
  let researcherClient: CarpClient;

  beforeAll(async () => {
    const { carpClient } = await setupResearcherClient();
    researcherClient = carpClient;
  });

  it('Inviting a researcher should succeed', async () => {
    await researcherClient.accounts.invite({
      emailAddress: import.meta.env.VITE_PARTICIPANT_EMAIL,
      role: 'RESEARCHER',
    });
  });

  // TODO: stop skipping when backend support works again
  it.skip('Checking if a researcher account is a researcher should return true', async () => {
    await expect(
      researcherClient.accounts.isAccountOfRole({
        role: 'RESEARCHER',
        emailAddress: import.meta.env.VITE_RESEARCHER_EMAIL,
      })
    ).resolves.toBeTruthy();
  });

  // TODO: fix when backend support works again
  it.skip('Checking if a participant account is a researcher should return false', async () => {
    await expect(
      researcherClient.accounts.isAccountOfRole({
        role: 'RESEARCHER',
        emailAddress: import.meta.env.VITE_PARTICIPANT_EMAIL,
      })
    ).resolves.toBeFalsy();
  });

  // TODO: fix when backend support works again
  it.skip('Checking if a non-existent account is a researcher should throw an error', async () => {
    await expect(
      researcherClient.accounts.isAccountOfRole({
        role: 'RESEARCHER',
        emailAddress: 'random@random.com',
      })
    ).rejects.toThrow();
  });
});
