CREATE TABLE `templates` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`template_id` text NOT NULL,
	`name` text NOT NULL,
	`tag` text NOT NULL,
	`description` text,
	`icon` text,
	`questions` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `templates_template_id_unique` ON `templates` (`template_id`);