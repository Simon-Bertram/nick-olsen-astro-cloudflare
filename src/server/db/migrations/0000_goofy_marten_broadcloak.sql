CREATE TABLE `subscribers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`traffic_source` text,
	`device` text DEFAULT 'desktop' NOT NULL,
	`email_verified` integer,
	`unsubscribed` integer,
	`confirmation_token` text,
	CONSTRAINT "email" CHECK(email LIKE '%@%.%')
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscribers_email_unique` ON `subscribers` (`email`);