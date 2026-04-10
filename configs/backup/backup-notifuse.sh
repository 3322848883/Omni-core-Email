#!/bin/bash
# Notifuse Database Backup Script
# Created: $(date)

BACKUP_DIR="/var/backups/notifuse"
DATE=$(date +%Y%m%d_%H%M%S)
DB_USER="postgres"
DB_HOST="localhost"

# Create backup directory if not exists
mkdir -p $BACKUP_DIR

# Backup system database
echo "[$(date)] Backing up notifuse_system..."
PGPASSWORD=postgres pg_dump -h $DB_HOST -U $DB_USER notifuse_system > $BACKUP_DIR/system_$DATE.sql

# Backup workspace database
echo "[$(date)] Backing up notifuse_ws_omnicore..."
PGPASSWORD=postgres pg_dump -h $DB_HOST -U $DB_USER notifuse_ws_omnicore > $BACKUP_DIR/workspace_$DATE.sql

# Compress backups
gzip -f $BACKUP_DIR/system_$DATE.sql
gzip -f $BACKUP_DIR/workspace_$DATE.sql

# Clean up backups older than 7 days
echo "[$(date)] Cleaning up old backups..."
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete

# Log completion
echo "[$(date)] Backup completed: system_$DATE.sql.gz, workspace_$DATE.sql.gz"
echo "[$(date)] Backup disk usage: $(du -sh $BACKUP_DIR | cut -f1)"
