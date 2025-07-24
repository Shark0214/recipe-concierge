# Feed Service

| File | Responsibility |
| --- | --- |
| src/controllers/FeedController.ts | Feed API |
| src/domain/RankingEngine.ts | Ranking logic |
| src/infra/CandidateProvider.ts | SQL provider |
| src/infra/FeedCache.ts | Redis cache |
| src/jobs/RefreshFeedJob.ts | Cron job |
