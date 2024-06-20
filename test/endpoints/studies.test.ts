import { CarpClient } from '@/client';
import { StudyStatus, setupResearcherClient } from '@/shared';
import { beforeAll, describe, expect, it } from 'vitest';

describe('Studies service', () => {
  let researcherClient: CarpClient;
  let researcherAccountId: string;

  beforeAll(async () => {
    const { carpClient, accountId } = await setupResearcherClient();
    researcherClient = carpClient;
    researcherAccountId = accountId;
  });

  it('should create a study', async () => {
    await expect(
      researcherClient.studies.create({
        name: 'Test study',
        description: 'This is a test study',
        ownerId: researcherAccountId,
      })
    ).resolves.toBeInstanceOf(StudyStatus);
  });
});
